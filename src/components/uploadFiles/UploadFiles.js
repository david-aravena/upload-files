import {useState} from 'react';
import {UploadFilesUI} from './UploadFilesUI'



export const UploadFiles = () => {
    const [filesList, setFilesList] = useState([]);
    const [progressUploadFile, setProgressUploadFile] = useState(null);
    

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
        setFilesList: setFilesList,
        setProgressUploadFile: setProgressUploadFile
    }


    const states = {
        filesList: filesList,
        progressUploadFile: progressUploadFile
    }

    
    return(
        <>
            <UploadFilesUI functions={functions} states={states} />
        </>
    );
};
