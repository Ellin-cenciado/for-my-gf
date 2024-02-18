

function App() {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <Wrapper />
    </div>
  );
}

function Wrapper() {
  return (
    <div className="Wrapper">
      <EnvelopeFlap className="envelopeFlap" />
      <Envelope />
      <Letter/>
      <EnvelopeBg />
    </div>
  );
}

function Letter() {
  return <div className="letter p-[2rem] text-sm">
  I wanted to tell you how much i love you, 
  and how much u matter to me. You&apos;re, and always will be, 
  an awesome girlfriend, I&apos;ll gladly spend the rest of my days with you living in
  a big beatiful house <br/> <span className="flex pr-[3rem] justify-end">Love u lots, ur bf</span></div>;
}

function Envelope() {
  return <div className="envelopeClass"></div>;
}
function EnvelopeFlap() {
  return <div className="envelopeFlap"></div>;
}

function EnvelopeBg() {
  return (
    <div className="absolute bg-pink-400 rounded-md justify-center items-center w-128 h-72 z-[-1]"></div>
  );
}

export default App;
