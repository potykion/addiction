from aiohttp import web
from aiohttp.web_response import json_response
from aiohttp_apispec import docs, use_kwargs, marshal_with
from aiopg.sa import SAConnection
from marshmallow.schema import BaseSchema
import sqlalchemy as sa
from rbcn_gateway import db
from rbcn_gateway.schemas import EntitySchema, ServiceSchema
from rbcn_gateway.models import Entity


