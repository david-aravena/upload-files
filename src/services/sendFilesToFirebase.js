import {storage, ref, uploadBytesResumable, getDownloadURL} from './../firebase/firebaseConfig'

export const sendFilesToFirebase = (files, setProgressUploadFile) => {

    for(let i in files){
        const storageRef = ref(storage, `uploadFiles/filesUsers/${files[i].name}`);
        const uploadTask = uploadBytesResumable(storageRef, files[i]);
        
        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed',
        (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgressUploadFile(progress)

            console.log('Upload is ' + progress + '% done');
        },
        (error) => {
            // Handle unsuccessful uploads
        },
        () => {
            // Handle successful uploads on complete
            getDownloadURL(uploadTask.snapshot.ref)
        }
        )
    }
}
