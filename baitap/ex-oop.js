class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

class Line{
    constructor(Point1, Point2){
        this.Point1 = Point1;
        this.Point2 = Point2;
    }
    getLength(){
        const dx = this.Point1.x - this.Point2.x;
        const dy = this.Point1.y - this.Point2.y;
        const length = Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2))
        return length;
    }
}
class ChuVi{
    constructor(pointA, pointB, pointC){
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
    }
    getPerimeter(){
        const l1 = new Line(this.pointA,this.pointB);
        const l2 = new Line(this.pointB,this.pointC);
        const l3 = new Line(this.pointC,this.pointA);
        return l1.getLength() + l2.getLength() + l3.getLength();
    }
}
const p1 = new Point(1,2);
const p2 = new Point(1,1);
const p3 = new Point(3,5);
// const line1 = new Line(p1,p2);
const chuvi = new ChuVi(p1,p2,p3);
console.log(chuvi.getPerimeter());