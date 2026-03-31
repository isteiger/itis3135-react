export default function Cards() {
  return (
    <>
      <style>{`
        #playing-cards {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
          padding: 32px;
          width: min(1100px, 100%);
          box-sizing: border-box;
          margin: 0 auto;
          background: #0f172a;
          border-radius: 8px;
        }
        .card {
          width: 220px;
          height: 320px;
          display: flex;
          justify-content: space-between;
          padding: 16px;
          box-sizing: border-box;
          background: #f8fafc;
          color: #0f172a;
          border-radius: 14px;
          border: 1px solid rgba(15, 23, 42, 0.12);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.28);
        }
        .card-left, .card-middle, .card-right {
          font-weight: 700;
          line-height: 1;
        }
        .card-left {
          align-self: flex-start;
          font-size: 22px;
        }
        .card-middle {
          align-self: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 42px;
        }
        .card-right {
          align-self: flex-end;
          font-size: 22px;
          transform: rotate(180deg);
        }
        .red { color: #b91c1c; }
        .black { color: #0f172a; }
        .pip { font-size: 44px; }
      `}</style>
      <main id="playing-cards">
        <div className="card">
          <div className="card-left red">A<br />&#9829;</div>
          <div className="card-middle red">
            <div className="pip">&#9829;</div>
          </div>
          <div className="card-right red">A<br />&#9829;</div>
        </div>

        <div className="card">
          <div className="card-left black">K<br />&#9824;</div>
          <div className="card-middle black">
            <div className="pip">&#9824;</div>
          </div>
          <div className="card-right black">K<br />&#9824;</div>
        </div>

        <div className="card">
          <div className="card-left red">7<br />&#9830;</div>
          <div className="card-middle red">
            <div className="pip">&#9830;</div>
          </div>
          <div className="card-right red">7<br />&#9830;</div>
        </div>
      </main>
    </>
  )
}
