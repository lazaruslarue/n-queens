/*           _                    
   ___  ___ | |_   _____ _ __ ___ 
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n){
  var solution = undefined; //fixme
  var board = new Board({"n":n}); 
  for (var i = 0; i < n; i++) {
    board.togglePiece(i,i);
  };
  solution = board.rows();
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n){
  var solutionCount = undefined; //fixme
  var Slate = function(rowsArray, rooks) {
    Board.call(this, rowsArray);
    this.rooks = rooks;
  };

  Slate.prototype = new Board({"n":n});
  Slate.prototype.constructor = Slate;
  Slate.prototype.valid = function () {
    if (solutionCount === undefined) {
      solutionCount = 0;
      var newBoard = new Slate(this.rows(), 1);
      newBoard.valid();
    }
    var toggleArray = [];
    ///

    
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        this.togglePiece(i,j);
        if (!this.hasAnyRooksConflicts()){
          toggleArray.push([i,j]);
        }
        this.togglePiece(i,j);
      }
    }



    ///
    if (n === this.rooks ) {
      solutionCount++
      return;
    } else if (toggleArray.length === 0) {
      return false;
    } else if (toggleArray.length > 0 && (n > this.rooks)) {
      console.log(toggleArray)
      return this.toggler(toggleArray);
    } 
  }
  Slate.prototype.toggler = function(toggleArray) {

    for (var i = 0; i < toggleArray.length; i++) {
      var newBoard = new Slate(this.rows(), this.rooks);
      newBoard.togglePiece(toggleArray[i][0],toggleArray[i][1]);
      newBoard.rooks++;
      newBoard.valid();
    }
  };
  Slate.prototype.valid();

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};





// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n){
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n){
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
