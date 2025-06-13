import "./Skyline.css";

function Skyline({ darkMode }) {
  console.log("DARK MIDE", darkMode);
  return (
    <div class={`skyline-wrapper ${darkMode ? "light-mode" : "dark-mode"}`}>
      <div class={`sky ${darkMode ? "light-mode" : "dark-mode"}`}></div>

      <div class="cloud cloud-1">
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
      </div>
      <div class="cloud cloud-2">
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
      </div>
      <div class="cloud cloud-3">
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
      </div>
      <div class="cloud cloud-4">
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
      </div>
      <div class="cloud cloud-5">
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
      </div>
      <div class="cloud cloud-6">
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
      </div>
      <div class="cloud cloud-7">
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
      </div>
      <div class="cloud cloud-8">
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
      </div>
      <div class="cloud cloud-9">
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
      </div>
      <div class="cloud cloud-10">
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
      </div>
      <div class="cloud cloud-11">
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
      </div>
      <div class="cloud cloud-12">
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
      </div>
      <div class="cloud cloud-13">
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
      </div>
      <div class="cloud cloud-14">
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
      </div>
      <div class="cloud cloud-15">
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
        <div class="cloud-element"></div>
      </div>

      {!darkMode ? (
        <div class="moon-pos">
          <div class="moon-container">
            <div class="moon full"></div>
            <div class="moon new waxing-g hidden"></div>
            <div class="moon new half-moon-g hidden"></div>
            <div class="moon full waxing-c hidden"></div>
            <div class="moon new new-moon hidden"></div>
            <div class="moon full waning-c hidden"></div>
            <div class="moon full half-moon-c hidden"></div>
            <div class="moon new waning-g hidden"></div>
          </div>
        </div>
      ) : (
        <div class="sun-pos">
          <div class="sun-container">
            <div class="sun"></div>
            <div class="sun-rays">
              <div class="sun-ray"></div>
              <div class="sun-ray"></div>
              <div class="sun-ray"></div>
              <div class="sun-ray"></div>
              <div class="sun-ray"></div>
              <div class="sun-ray"></div>
              <div class="sun-ray"></div>
              <div class="sun-ray"></div>

              <div class="sun-ray"></div>
              <div class="sun-ray"></div>
              <div class="sun-ray"></div>
              <div class="sun-ray"></div>
              <div class="sun-ray"></div>
              <div class="sun-ray"></div>
              <div class="sun-ray"></div>
              <div class="sun-ray"></div>
            </div>
          </div>
        </div>
      )}

      <div id="mountRainier">
        <div id="mt-top"></div>
        <div id="rainier"></div>
        <div id="small-mt"></div>
        <div id="mt-base"></div>
        <div class="snow-splotch-1"></div>
        <div class="snow-splotch-2"></div>
        <div class="snow-splotch-3"></div>
        <div class="snow-splotch-4"></div>
        <div class="snow-splotch-5"></div>
      </div>

      <div id="spaceNeedle">
        <div class="left-leg-bottom"> </div>

        <div class="right-side-bot">
          <div class="rect-container">
            <div class="rect-bot"></div>
            <div class="rect-bot"></div>
            <div class="rect-bot"></div>
            <div class="rect-bot"></div>
            <div class="rect-bot"></div>
            <div class="rect-bot"></div>
            <div class="rect-bot"></div>
          </div>
        </div>

        <div class="right-leg-bottom"></div>

        <div class="mid-section-lower">
          <div class="mid-section-container">
            <div class="window-long"></div>
          </div>
        </div>

        <div class="mid-section-mid"></div>

        <div class="mid-section-right"></div>

        <div class="mid-section-left"></div>

        <div class="top-section-left"></div>

        <div class="top-section-mid"></div>

        <div class="top-section-right"></div>

        <div class="top-base-bottom-circle"></div>

        <div class="top-base"></div>

        <div class="top-base-top"></div>

        <div class="top-base-top-circle"></div>

        <div class="top-orange"></div>

        <div class="top-orange-top"></div>

        <div class="top-orange-top-circle"></div>

        <div class="antenna"></div>
      </div>

      <div class="building-1">
        <div class="outer-container">
          <div class="inner">
            <div class="inner-container"></div>
          </div>
        </div>
      </div>

      <div class="building-2">
        <div class="outer-container">
          <div class="inner">
            <div class="inner-container"></div>
          </div>
        </div>
      </div>

      <div class="building-3">
        <div class="outer-container">
          <div class="inner">
            <div class="inner-container"></div>
          </div>
        </div>
      </div>

      <div class="building-4">
        <div class="outer-container">
          <div class="inner">
            <div class="inner-container"></div>
          </div>
        </div>
      </div>

      <div class="building-5">
        <div class="outer-container">
          <div class="inner">
            <div class="inner-container"></div>
          </div>
        </div>
      </div>

      <div class="building-6">
        <div class="outer-container">
          <div class="inner">
            <div class="inner-container"></div>
          </div>
        </div>
      </div>

      <div class="building-7">
        <div class="outer-container">
          <div class="inner">
            <div class="inner-container"></div>
          </div>
        </div>
      </div>

      <div class="building-8">
        <div class="outer-container">
          <div class="inner">
            <div class="inner-container"></div>
          </div>
        </div>
      </div>

      <div class="building-9">
        <div class="outer-container">
          <div class="inner">
            <div class="inner-container"></div>
          </div>
        </div>
      </div>

      <div class="building-10">
        <div class="outer-container">
          <div class="inner">
            <div class="inner-container"></div>
          </div>
        </div>
      </div>

      <div class="building-11">
        <div class="outer-container">
          <div class="inner">
            <div class="inner-container"></div>
          </div>
        </div>
      </div>

      <div class="building-12">
        <div class="outer-container">
          <div class="inner">
            <div class="inner-container"></div>
          </div>
        </div>
      </div>

      <div class="building-13">
        <div class="outer-container">
          <div class="inner">
            <div class="inner-container"></div>
          </div>
        </div>
      </div>

      <div class="building-14">
        <div class="outer-container">
          <div class="inner">
            <div class="inner-container"></div>
          </div>
        </div>
      </div>

      <div class="building-15">
        <div class="outer-container">
          <div class="inner">
            <div class="inner-container"></div>
          </div>
        </div>
      </div>

      <div class="building-16">
        <div class="outer-container">
          <div class="inner">
            <div class="inner-container"></div>
          </div>
        </div>
      </div>

      <div class="building-17">
        <div class="outer-container">
          <div class="inner">
            <div class="inner-container"></div>
          </div>
        </div>
      </div>

      <div class="building-18">
        <div class="outer-container">
          <div class="inner">
            <div class="inner-container"></div>
          </div>
        </div>
      </div>

      <div class="building-19">
        <div class="outer-container">
          <div class="inner">
            <div class="inner-container"></div>
          </div>
        </div>
      </div>

      <div class="building-20">
        <div class="outer-container">
          <div class="inner">
            <div class="inner-container"></div>
          </div>
        </div>
      </div>

      <div class="building-21">
        <div class="outer-container">
          <div class="inner">
            <div class="inner-container"></div>
          </div>
        </div>
      </div>

      <div class="building-22">
        <div class="outer-container">
          <div class="inner">
            <div class="inner-container"></div>
          </div>
        </div>
      </div>

      <div class="tree-1">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-2">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-3">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-4">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-5">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-6">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-7">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-8">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-9">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-10">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-11">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-12">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-13">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-14">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-15">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-16">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-17">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-18">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-19">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-20">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-21">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-22">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-23">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-24">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-25">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-26">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-27">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-28">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-29">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-30">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-31">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-32">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-33">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-34">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-35">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-36">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-37">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-38">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-39">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-40">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-41">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-42">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-43">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-44">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-45">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-46">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-47">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-48">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-49">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>

      <div class="tree-50">
        <div class="trunk"></div>
        <div class="leaf"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>
    </div>
  );
}

export default Skyline;
