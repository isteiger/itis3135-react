export default function Inventory() {
  return (
    <>
      <style>{`
        .inventory-table span {
          display: inline-block;
        }
        .inventory-table tr.read {
          background-image: linear-gradient(to right, #e0f7e9, #b2dfdb);
        }
        .inventory-table tr.to-read {
          background-image: linear-gradient(to right, #e3f2fd, #bbdefb);
        }
        .inventory-table tr.in-progress {
          background-image: linear-gradient(to right, #fff8e1, #ffe082);
        }
        .inventory-table tr.to-read span.status {
          border: 1px solid #1565c0;
          background-image: linear-gradient(to right, #1565c0, #1976d2);
          color: white;
        }
        .inventory-table tr.read span.status {
          border: 1px solid #2e7d32;
          background-image: linear-gradient(to right, #2e7d32, #388e3c);
          color: white;
        }
        .inventory-table tr.in-progress span.status {
          border: 1px solid #e65100;
          background-image: linear-gradient(to right, #e65100, #f57c00);
          color: white;
        }
        .inventory-table span.status,
        .inventory-table span[class^="rate"] {
          height: 24px;
          width: auto;
          padding: 2px 8px;
        }
        .inventory-table span[class^="rate"] > span {
          border: 1px solid #999;
          border-radius: 50%;
          margin: 2px;
          height: 14px;
          width: 14px;
          background-color: #ddd;
          display: inline-block;
        }
        .inventory-table span.rate.three span {
          background-image: linear-gradient(to bottom, #ffd700, #ffa000);
        }
        .inventory-table span.rate.two span:nth-child(1),
        .inventory-table span.rate.two span:nth-child(2) {
          background-image: linear-gradient(to bottom, #ffd700, #ffa000);
        }
        .inventory-table span.rate.one span:first-child {
          background-image: linear-gradient(to bottom, #ffd700, #ffa000);
        }
      `}</style>
      <main>
        <h2>Book Inventory</h2>
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Status</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr className="read">
              <td>The Great Gatsby</td>
              <td>F. Scott Fitzgerald</td>
              <td>Fiction</td>
              <td><span className="status">Read</span></td>
              <td><span className="rate one"><span></span><span></span><span></span></span></td>
            </tr>
            <tr className="to-read">
              <td>Dune</td>
              <td>Frank Herbert</td>
              <td>Sci-Fi</td>
              <td><span className="status">To Read</span></td>
              <td><span className="rate"><span></span><span></span><span></span></span></td>
            </tr>
            <tr className="in-progress">
              <td>Atomic Habits</td>
              <td>James Clear</td>
              <td>Self-Help</td>
              <td><span className="status">In Progress</span></td>
              <td><span className="rate two"><span></span><span></span><span></span></span></td>
            </tr>
            <tr className="read">
              <td>1984</td>
              <td>George Orwell</td>
              <td>Dystopian</td>
              <td><span className="status">Read</span></td>
              <td><span className="rate three"><span></span><span></span><span></span></span></td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  )
}
