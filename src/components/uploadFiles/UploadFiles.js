import {useState} from 'react';
import {UploadFilesUI} from './UploadFilesUI'
import { sendFilesToFirebase } from '../../services/sendFilesToFirebase'
import {UploadedFiles} from './../uploadedFiles/UploadedFiles'


export const UploadFiles = () => {
    const [filesList, setFilesList] = useState([]);
    const [uploadFilesProgress, setUploadFilesProgress] = useState(null);
    const [linksDownload, setLinksDownload] = useState([])


    const uploadFiles = () => {
        sendFilesToFirebase(filesList, setUploadFilesProgress, setLinksDownload, linksDownload);
    }

    const refreshPage = () => {
        window.location.href = window.location.href;
    }

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
        uploadFiles: uploadFiles,
        refreshPage: refreshPage
    }


    const states = {
        filesList: filesList,
        uploadFilesProgress: uploadFilesProgress,
        linksDownload: linksDownload
    }

    
    return(
        <>
            {uploadFilesProgress === null ?
                <UploadFilesUI functions={functions} states={states} />
            :
                <UploadedFiles functions={functions} states={states} />
            }
        </>
    );
};
