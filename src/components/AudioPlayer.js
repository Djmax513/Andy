export default function AudioPlayer () {
  return (
    <audio id="music-player" controls muted loop className="hidden">
      <source src="/Syd Matters - To All of You.ogg" type="audio/ogg" />
      Your browser does not support the audio element.
    </audio>
  )
}