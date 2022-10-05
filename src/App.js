import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

function App() {
  const [cor, setCor] = useState();
  const [acertou, setAcertou] = useState("");
  const [loading, setLoading] = useState(false);
  const [dark, setDark] = useState(false);

  const geraCor = () => {
    // gernerate a random color in hexadecimal
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + hex;
  };

  const handleClick = (option) => {
    setAcertou("");
    setTimeout(() => {
      if (option === cor) {
        setAcertou("true");
        setLoading(false);
        setCor(geraCor());
        options = [geraCor(), cor, geraCor()];
      }
      if (option !== cor) {
        setAcertou("false");
        setLoading(false);
      }
    }, 700);
  };

  var options = [geraCor(), cor, geraCor()];

  useEffect(() => {
    setCor(geraCor());
  }, []);

  return (
    <>
      <div id="pai">
        <div className="absolute h-full w-full bg-neutral-100 dark:bg-neutral-800 transition-all duration-500 dark:text-neutral-50">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full poppins">
            <div class=" w-[25%] h-[26rem] mx-auto my-8">
              <div
                className="h-[60%] rounded-t-2xl"
                style={{ backgroundColor: cor }}
              ></div>
              <div className="h-[40%] bg-neutral-100 dark:bg-neutral-700 shadow-lg rounded-b-2xl ">
                <p className="p-3 text-center mb-12 font-bold">
                  Escolha o HEX que represente a cor acima!
                </p>
                <div className="flex justify-evenly">
                  {options
                    .sort((a, b) => 0.5 - Math.random())
                    .map((option) => {
                      return (
                        <div className="flex justify-center">
                          <button
                            className="bg-white dark:bg-neutral-800 rounded-2xl px-5 py-2 text-lg font-bold mx-2 my-2 uppercase font-sans shadow-md transition-all duration-500"
                            onClick={() => {
                              handleClick(option);
                              setLoading(true);
                            }}
                          >
                            {option}
                          </button>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="absolute w-full">
              <div className="flex justify-center poppins">
                {loading ? (
                  <CircularProgress
                    sx={{
                      color: cor,
                    }}
                  />
                ) : (
                  ""
                )}
                {acertou === "true" ? (
                  <p className="text-2xl font-bold text-green-500">Acertou!</p>
                ) : acertou === "false" ? (
                  <p className="text-2xl font-bold text-red-500">Errou!</p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="absolute left-7 bottom-7">
            <button
              className="rounded-full dark:bg-neutral-900 bg-white shadow-md -500 p-2"
              onClick={() => {
                setDark(!dark);
                document.getElementById("pai").className.includes("dark")
                  ? document.getElementById("pai").classList.remove("dark")
                  : document.getElementById("pai").classList.add("dark");
              }}
            >
              {dark ? (
                <IoMoonOutline size={50} />
              ) : (
                <IoSunnyOutline size={50} />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
