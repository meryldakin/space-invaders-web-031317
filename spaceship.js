class Spaceship {
  constructor( name, crew_array, phasers, shields) {
    var self = this
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.phasersCharge = "uncharged"
    this.crew_array = crew_array
    if ( crew_array.length !== 0 ) {
      crew_array.forEach(function(crewMember){
        return crewMember.currentShip = self
      })
      return this.docked = false
    } else {
      return this.docked = true
    }

  }

}
