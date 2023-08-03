export default function Map() {
  return (
    <div className="container my-5">
      <div className="row" id="map">
        <div className="col-md col-lg my-auto">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
            className="embed-responsive-item"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15221.037117947006!2d78.4006932!3d17.4951322!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9125823849ab%3A0x59fad4aedf34a8f5!2sPadmavathi%20Plaza!5e0!3m2!1sen!2sin!4v1688815072940!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
