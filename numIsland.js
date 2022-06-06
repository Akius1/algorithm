function numIsland(grid) {
  let count = 0;

  let lengthOfGrid = grid.length;

  //Loop through the entire matrix row by row
  for (let row = 0; row < grid.length; row++) {
    //Lets loop through each row
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === "1") {
        count++;
        sincIsland(grid, row, col);
      }
    }
  }

  function sincIsland(grid, row, col) {
    if (
      row < 0 ||
      row >= grid.length  ||
      col < 0 ||
      col >= grid[0].length||
      grid[row][col] === "0"
    )
      return;

      grid[row][col] = "0";
      sincIsland(grid, row - 1, col);
      sincIsland(grid, row + 1, col);
      sincIsland(grid, row, col - 1);
      sincIsland(grid, row, col + 1);
  }

  return count;
}

let grids = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ];

 console.log(numIsland(grids));
