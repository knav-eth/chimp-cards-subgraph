import { CHIMPCards, Transfer } from "../generated/CHIMPCards/CHIMPCards"
import { ChimpCard } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
  let tokenId = event.params.tokenId
  let adventureCardPack = ChimpCard.load(tokenId.toString())

  if (adventureCardPack == null) {
    adventureCardPack = new ChimpCard(tokenId.toString())

    let contract = CHIMPCards.bind(event.address)
    adventureCardPack.name = "CHIMP Card #" + tokenId.toString()
    adventureCardPack.image = contract.tokenSVG(tokenId)
    adventureCardPack.numericId = tokenId.toI32()

    let tokenData = contract.cardDataForToken(tokenId)
    adventureCardPack.chimpId = tokenData.chimpId.toI32()
    adventureCardPack.adventureCardId = tokenData.packId.toI32()
    adventureCardPack.adventureCardOffset = tokenData.cardOffset.toI32()
    adventureCardPack.edition = tokenData.edition.toI32() + 1
  }

  adventureCardPack.owner = event.params.to
  adventureCardPack.save()
}
