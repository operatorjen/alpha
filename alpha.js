const players = ['Instigator', 'Observer', 'Receiver']

const stateMatrix = {
  'Instigator': { action: 'transmits_payload', target: 'Receiver' },
  'Receiver':   { action: 'processes_signal',  target: 'Observer' },
  'Observer':   { action: 'records_delta',     target: 'Instigator' }
}

function play(cycles = 1) {
  let activeNode = 'Instigator'
  let systemEntropy = 0

  for (let i = 0; i < cycles; i++) {
    players.forEach(p => {
      if (p === activeNode) {
        const behavior = stateMatrix[p]
        console.log(`Cycle ${i + 1} | ${p} ${behavior.action} -> routing to ${behavior.target}`)
        if (p === 'Observer') systemEntropy += Math.random() * 0.05
        activeNode = behavior.target
      }
    })
  }

  console.log(`\nAccumulated observer entropy: ${systemEntropy.toFixed(2)}`)
  return systemEntropy
}

play(3)