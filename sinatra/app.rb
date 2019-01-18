class ApplicationController < Sinatra::Base
  configure :development do
    register Sinatra::Reloader
    register Sinatra::Namespace
  end
  namespace '/api/v1' do
    before do
      content_type 'application/json'
    end

    get '/users/requests' do
      'Request.all'
    end

    post '/users' do
      new_user = User.new(json_params)
      
      if new_user.save
        status 201 
      else status 
        422
      end
    end

    post '/users/request' do
      new_request = Request.new(json_params)
      if new_request.save
        status 201
      else status
        422
      end
    end

    post '/users' do
      # User.create(:name => )
    end
  end

  def json_params
    begin
      JSON.parse(request.body.read)
    rescue
      halt 400, { message:'Invalid JSON' }.to_json
    end
  end
end
