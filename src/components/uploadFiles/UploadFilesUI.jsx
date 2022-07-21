import './uploadFilesUI.css'
import { showSizeFile } from '../../services/showSizeFiles'

export const UploadFilesUI = ({functions, states}) => {

    return(
        <div className="container">
            <div className="buttonsForm">
                <input type="file" id="inputFiles"multiple onChange={functions.getFilesFromInput} style={{color: "transparent"}} />
                <button onClick={() => functions.uploadFiles()}>Subir archivos</button>
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