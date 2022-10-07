let each = Js.import(Belt.List.forEach)

let eachInt = (list: list<int>, f: int => unit) =>
  Js.Promise.then_(each => list->each(f)->Js.Promise.resolve, each)

module type BeltList = module type of Belt.List

let beltAsModule = Js.import(module(Belt.List: BeltList))
