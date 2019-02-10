from typing import List, Tuple

import attr


@attr.s(auto_attribs=True, frozen=True)
class Module:
    name: str
    path: str
    imports: Tuple[str, ...] = attr.ib(factory=tuple)
