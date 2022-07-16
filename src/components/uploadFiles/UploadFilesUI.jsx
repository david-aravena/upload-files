import './uploadFilesUI.css'

export const UploadFilesUI = ({functions, states}) => {

    const showSizeFile = (size) => {
        if(size >= 1000 && size <= 999999){
            return `${Math.round(size/1000)} KB`
        } else if(size >= 1000000 && size <= 999999999){
            return `${Math.round(size/1000000)} MB`
        } else if(size >= 1000000000) {
            return `${Math.round(size/1000000000)} GB`
        } else{
            return `${size} bytes`
        }
    }

    return(
        <div className="container">
            <div className="buttonsForm">
                <input type="file" id="inputFiles"multiple onChange={functions.getFilesFromInput} style={{color: "transparent"}} />
            </div>


            {states.filesList.length === 0 && 
                <h2 style={{textAlign: 'center'}}>Elija los archivos para subir a la nube y recibir un link de descarga</h2>
            }


            {states.filesList.length > 0 &&
                <div className="filesList">
                    {states.filesList.map((file, index) => {
                        return (
                            <div key={index} className="item">
                                <div className="file">
                                        <p><span>Nombre</span>: {file.name}</p>

                                        <p><span>Tamaño</span>: {showSizeFile(file.size)}</p>

                                        <p><span>Formato</span>: {file.type} </p>
                                </div>
                                <div>
                                    <button className="buttonDeleteFile" onClick={() => functions.deleteFile(index)}>X</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}