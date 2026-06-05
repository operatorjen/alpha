const players = ['Instigator', 'Observer', 'Receiver']

const stateMatrix = {
  'Instigator': { action: 'transmits_payload', target: 'Receiver' },
  'Receiver':   { action: 'processes_signal',  target: 'Observer' },
  'Observer':   { action: 'records_delta',     target: 'Instigator' }
}

function play(cycles = 1) {
  let active = 'Instigator'
  let sysEnt = 0

  for (let i = 0; i < cycles; i++) {
    players.forEach(p => {
      if (p === active) {
        const behavior = stateMatrix[p]
        console.log(`Cycle ${i + 1} | ${p} ${behavior.action} -> routing to ${behavior.target}`)
        if (p === 'Observer') sysEnt += Math.random() * 0.05
        active = behavior.target
      }
    })
  }

  console.log(`\nAccumulated entropy: ${sysEnt.toFixed(2)}`)
  return sysEnt
}

play(3)