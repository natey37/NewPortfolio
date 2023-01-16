import resume from '../../images/resume/resume.pdf'
import "./MenuItems.css"

export default function Resume({handleDownload}) {

  return(
    <div className='resume-container'>
      <iframe className="resume-iframe"  title="Resume" src={resume + "#zoom=60"} width="100%" height="100%" />
      <div className="resume-download-link" onClick={() => handleDownload()}>Download PDF</div>
    </div>
  )
}