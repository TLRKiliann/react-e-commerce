import storeItems from "../data/items.json"


export function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row>
        {storeItems.map(items => (
          <Col>JSON.stringify(item)</Col>
        ))}
      </Row>
    </>
  )
}