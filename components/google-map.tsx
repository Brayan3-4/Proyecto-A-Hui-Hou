export function GoogleMap() {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.516467908707!2d-74.10595938883815!3d4.66803954282222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b9e2b2a82a1%3A0x761d0701a1e01f06!2sUniversidad%20Libre%20Sede%20El%20Bosque!5e0!3m2!1ses!2sco!4v1747583112227!5m2!1ses!2sco"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa de la Universidad Libre Sede El Bosque"
      />
    </div>
  )
}