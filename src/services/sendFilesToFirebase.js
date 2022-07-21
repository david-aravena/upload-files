import {storage, ref, uploadBytesResumable, getDownloadURL} from './../firebase/firebaseConfig'

export const sendFilesToFirebase = (files, setUploadFilesProgress, setLinksDownload) => {

    let progressUploadFiles = {}
    let filesUpload = []
    for(let i in files){
        const storageRef = ref(storage, `uploadFiles/filesUsers/${files[i].name}`);
        const uploadTask = uploadBytesResumable(storageRef, files[i]);

        uploadTask.on('state_changed',
        (snapshot) => {
            progressUploadFiles[snapshot.ref.name]=[snapshot.bytesTransferred, snapshot.totalBytes]
            setUploadFilesProgress({...progressUploadFiles});
            
        },
        (error) => {
            
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                const objeto = {link: url, nameFile: uploadTask.snapshot.ref.name}
                filesUpload.push(objeto);
                setLinksDownload([...filesUpload])
            })
        }
        )
    }
}
