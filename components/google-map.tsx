"use client"

export function GoogleMap() {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5454518377584!2d-74.0636!3d4.6783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a5a5b5e5b5e%3A0x5e5e5e5e5e5e5e5e!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1620000000000!5m2!1ses!2sco"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación de A Hui Hou en Google Maps"
      />
    </div>
  )
}
