export default function AudioPlayer () {
  return (
    <audio id="music-player" controls muted autoPlay loop className="hidden">
      <source src="/Tame Impala - One More Hour.ogg" type="audio/ogg" />
      Your browser does not support the audio element.
    </audio>
  )
}