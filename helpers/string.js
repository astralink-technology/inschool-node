exports.padFront = function (req, res, num, size){
        var padded = num + "";
        while (padded.length < size) padded = "0" + padded;
        return padded;
}