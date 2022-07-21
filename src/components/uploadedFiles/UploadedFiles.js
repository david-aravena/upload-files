import {UploadedFilesUI} from './UploadedFilesUI'

export const UploadedFiles = ({functions, states}) => {
    
    const uploadedFileInfo = Object.entries(states.uploadFilesProgress);

    return(
        <UploadedFilesUI uploadedFileInfo={uploadedFileInfo} states={states} functions={functions} />
    )

}