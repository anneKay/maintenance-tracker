require 'bundler'
Bundler.require

require './sinatra/helper'
require './sinatra/model/user'
require './sinatra/model/request'
require './sinatra/app'

run ApplicationController