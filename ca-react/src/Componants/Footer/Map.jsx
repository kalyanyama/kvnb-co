export default function Map() {
  return (
    <div className="container my-5">
      <div className="row" id="map">
        <div className="col-md col-lg my-auto">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7614.547131230907!2d78.49333849083915!3d17.398654333961556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99c757ba3c1f%3A0xca9d2388bab1d5b4!2sBagh%20Lingampally%2C%20New%20Nallakunta%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1686204255240!5m2!1sen!2sin"
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
