import {useState} from 'react';
import {UploadFilesUI} from './UploadFilesUI'



export const UploadFiles = () => {
    const [filesList, setFilesList] = useState([]);
    

    const getFilesFromInput = (e) => {
        const filesFromInput = e.target.files;
        const files = Array.from(filesFromInput);
        setFilesList([...filesList, ...files]);
    }


    const deleteFile = (index) => {
        const files = filesList;
        files.splice(index, 1);
        setFilesList([...files]);
        document.getElementById("inputFiles").value="";
    }


    const functions = {
        getFilesFromInput: getFilesFromInput,
        deleteFile: deleteFile,
        setFilesList: setFilesList
    }


    const states = {
        filesList: filesList
    }

    
    return(
        <>
            <UploadFilesUI functions={functions} states={states} />
        </>
    );
};
