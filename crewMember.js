class CrewMember {
  constructor( position ) {
    this.position = position
    this.currentShip = "Looking for a Rig"
  }
  chargePhasers() {
    var spaceship = this.currentShip
    if (this.position === "Gunner" && spaceship !== "Looking for a Rig"){
      spaceship.phasersCharge = "charged!"
    } else {
      return "had no effect"
    }
  }

  engageWarpDrive() {
    var spaceship = this.currentShip
    if (this.position === "Pilot" && spaceship !== "Looking for a Rig"){
      spaceship.warpDrive = "engaged!"
    } else {
      return "had no effect"
    }
  }

  setsInvisibility() {
    var spaceship = this.currentShip
    if (this.position === "Defender" && spaceship !== "Looking for a Rig"){
      spaceship.cloaked = true
    } else {
      return "had no effect"
    }
  }
}
