import VideoUploadModal from "../VideoUploadModal/VideoUploadModal";

function SideNav() {
    const [show, setShow] = useState(false);


    return (
        <div>
            <VideoUploadModal show={show} setShow={setShow} />
        </div>
    )
}

export default SideNav;




