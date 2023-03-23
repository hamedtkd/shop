import { Textfield } from '@/components';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export const CreatSlider = () => {
    

    const [file, setFile] = useState("");
    const [pic, setPic] = useState("");

    function blobToBase64(blob) {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(blob);
        });
    }
    file ? blobToBase64(file).then(res => {
        setPic(res)

    }) : null
    const onDrop = useCallback((acceptedFiles) => {
        setFile(acceptedFiles[0]);
    }, []);
    const { getRootProps, getInputProps } = useDropzone({ onDrop });
    return (
        <div className="rounded-2 border p-3 flex items-center flex-col" {...getRootProps()}>
            <Textfield type={'file'} {...getInputProps()} />
            <img src={pic} width='80%' height='500px' alt="" />
            {file?.name ? file.name : "upload your Article Thumbnail"}
        </div>
    );
}