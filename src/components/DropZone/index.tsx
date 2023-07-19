import React, { useState } from 'react';
import styles from './styles.module.css';
import DataItemType from '../../types/DataItemType';

interface DropZoneProps {
    onFileUpload: (data: DataItemType[]) => void;
}

const DropZone: React.FC<DropZoneProps> = ({ onFileUpload }) => {
    const [highlightDropArea, setHighlightDropArea] = useState(false);

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setHighlightDropArea(true);
    };

    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setHighlightDropArea(false);
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setHighlightDropArea(false);

        const files = event.dataTransfer.files;
        if (files.length === 0) return;

        const file = files[0];
        if (file.type !== 'text/csv') {
            console.log('Invalid file format. Please provide a CSV file.');
            return;
        }

        const reader = new FileReader();

        reader.onload = (event) => {
            const csvData = event.target?.result as string;
            const jsonArray = convertCsvToJson(csvData);
            onFileUpload(jsonArray);
        };

        reader.readAsText(file);
    };

    const convertCsvToJson = (csvData: string): any[] => {
        const lines = csvData.split('\n');
        const headers = lines[0].split(',');

        const jsonArray: any[] = [];

        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',');
            const jsonObject: any = {};

            for (let j = 0; j < headers.length; j++) {
                jsonObject[headers[j]] = values[j];
            }

            jsonArray.push(jsonObject);
        }

        return jsonArray;
    };

    return (
        <div
            className={`${styles['drop-area']} ${
                highlightDropArea ? styles['highlight'] : ''
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <p>Drag and drop a CSV file here</p>
        </div>
    );
};

export default DropZone;
