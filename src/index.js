
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix?
            matrix.reduce((acc, cur, idx)=>
              !(idx%2)?acc=[...acc,...cur.sort((a, b)=>a-b)]
              :acc=[...acc,...cur.sort((a, b)=>b-a)]
            ,[])
            :[];
}
