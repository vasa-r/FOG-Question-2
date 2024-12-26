import React, { useEffect, useState } from "react";

type Cell = {
  color: string;
  active: boolean;
};

const RainfallGrid: React.FC<{ rows: number; cols: number }> = ({
  rows,
  cols,
}) => {
  const [grid, setGrid] = useState<Cell[][]>(
    Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => ({ color: "black", active: false }))
    )
  );

  const getRandomColor = () => {
    const colors = ["#FF0000", "#FF4500", "#FF6347", "#FF7F50", "#FF8C00"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGrid((prevGrid) => {
        const newGrid = prevGrid.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            if (rowIndex === 0) {
              const startDrop = Math.random() < 0.1;
              return startDrop
                ? { color: getRandomColor(), active: true }
                : { ...cell, active: false };
            } else {
              // Move the drop one cell down
              const aboveCell = prevGrid[rowIndex - 1][colIndex];
              return aboveCell.active
                ? { color: aboveCell.color, active: true }
                : { color: "black", active: false };
            }
          })
        );
        return newGrid;
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, [rows, cols]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: "2px",
        backgroundColor: "black",
      }}
      className="grid w-full h-full"
    >
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: cell.active ? cell.color : "black",
              transition: "background-color 0.1s",
            }}
          />
        ))
      )}
    </div>
  );
};

export default RainfallGrid;
