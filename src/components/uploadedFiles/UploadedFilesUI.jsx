import './../uploadFiles/uploadFilesUI.css'
import { showSizeFile } from '../../services/showSizeFiles'

export const UploadedFilesUI = ({uploadedFileInfo, states, functions}) => {
    return(
        <div className="container">
            <div className="buttonsForm">
                {states.filesList.length === states.linksDownload.length &&
                    <button onClick={functions.refreshPage}>Subir mas archivos </button>            
                }
            </div>

            <div className="filesList">
                {uploadedFileInfo.map((file, index) => {
                    return (
                        <div key={index} className="item">
                            <div className="file">
                                <p><span>Archivo</span>: {file[0]}</p>
                                <p><span>bytes subidos</span>: {showSizeFile(file[1][0])}</p>
                            </div>
                            <div className="file">
                                <progress value={file[1][0]} max={file[1][1]}></progress>
                                { file[1][0] === file[1][1] ?
                                    <>
                                        <p><span>Completado</span></p>
                                        {states.linksDownload.length && 
                                            states.linksDownload.map((url, index) => {
                                                return(
                                                    <div key={index}>
                                                        {url.nameFile === file[0] &&
                                                            <>
                                                                <a href={url.link} target="blank">link de descarga</a>
                                                            </>
                                                        }
                                                    </div>
                                                )
                                            })
                                        }
                                      
                                    </>
                                :
                                    <p>{Math.round((file[1][0]/file[1][1]*100))} % Subido</p>
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}