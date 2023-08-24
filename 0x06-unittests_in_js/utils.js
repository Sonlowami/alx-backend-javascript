const Utils = {
    calculateNumber: (type, a, b) => {
        let result;
        switch (type) {
          case 'SUM':
            result = Math.round(a) + Math.round(b);
            break;
          case 'SUBTRACT':
            result = Math.round(a) - Math.round(b);
            break;
          case 'DIVIDE':
            const divider = Math.round(b)
            
            result = (divider != 0) ? Math.round(a) / divider : 'Error';
            break;
        }
        return result;
    },
}
module.exports = Utils
