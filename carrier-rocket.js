class CarrierRocket {
  constructor(stages) {
    this.stages = [...stages];
    //this.stages = stages.map((el)=>el); 2-й способ
  }
  detachStage(){
    return this.stages.splice(0,1);
  }
}

module.exports = CarrierRocket;
