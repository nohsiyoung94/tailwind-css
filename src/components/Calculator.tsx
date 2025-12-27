export default function Calculator() {
  return (
    <>
      <div className="bg-[#1f1f1f] flex justify-center items-center h-screen">
        <article className=" w-282px border border-[#333] bg-[#ccc] p-1 ">
          <form
            className="grid grid-cols-[repeat(4,65px)]
             grid-rows-[repeat(65px)] gap-2"
            name="froms"
          >
            <input type="text" className="calc-input" name="output" readOnly />
            <input type="button" className="calc-claer" value="C" />
            <input type="button" className="calc-operator" value="/" />
            <input type="button" className="calc-number" value="1" />
            <input type="button" className="calc-number" value="2" />
            <input type="button" className="calc-number" value="3" />
            <input type="button" className="calc-operator" value="*" />
            <input type="button" className="calc-number" value="4" />
            <input type="button" className="calc-number" value="5" />
            <input type="button" className="calc-number" value="6" />
            <input type="button" className="calc-operator" value="+" />
            <input type="button" className="calc-number" value="7" />
            <input type="button" className="calc-number" value="8" />
            <input type="button" className="calc-number" value="9" />
            <input type="button" className="calc-operator" value="-" />
            <input type="button" className="calc-dot" value="." />
            <input type="button" className="calc-number" value="0" />
            <input type="button" className="calc-result" value="=" />
          </form>
        </article>
      </div>
    </>
  );
}
