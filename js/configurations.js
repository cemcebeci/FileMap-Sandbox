fm.config = function(){

    var mode = 1;
    const cellSize = 32;

    const styles = {
        gridSystem: {
            strokeColor: new paper.Color(0.7),
            strokeWidth: 0.3,
            dashArray: [1, 1]
        },
        outer: {
            fillColor: new paper.Color(0.85),
            strokeJoin: 'round'
        },
        frame: {
            //fillColor: new Color(0),
            strokeColor: 'black',
            //        strokeColor: {
            //            gradient: {
            //                stops: ['black', '#000000']
            //            }
            //        },
            strokeWidth: 3,
            strokeJoin: 'round'
        },
        outerProps:{
            thFacFolder: 1, // thicknessFactor
            thFacFile: 1 // thicknessFactor
        },
        header: {
            fillColor: mode? 'black': '#CCCCCC'
            //        fillColor: {
            //            gradient: {
            //                stops: ['black', '#777777']
            //            }
            //        }
        },
        headerText: {
            fillColor: mode? 'white':'#222222',
            fontHeight: 0.75, // this ratios are relatively to header height
            distanceFromTop: 0.15,
            distanceFromLeft: 0.14,
            distanceFromBottom: 0.25
        },
        shadowPanel: { // shadow panel sendToBack
            strokeColor: new paper.Color(1, 1, 0)
            //dashArray: [1, 3]   
        },
        shadowPanelOK: { // shadow panel sendToBack
            strokeColor: new paper.Color(0, 1, 0)
            //dashArray: [1, 3]   
        },
        shadowPanelnotOK: { // shadow panel sendToBack
            strokeColor: new paper.Color(1, 0, 0)
            //dashArray: [1, 3]   
        }
    };

    var fun = function(){
        return null;
    };

    return {
        fun: fun,
        styles: styles,
        cellSize: cellSize
    };
}();

