
package se.maokei.battlebox;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.json.JsonObject;
import se.maokei.battlebox.constants.Constants;

/**
 * 
 *
 */
public class App extends AbstractVerticle 
{
    /*public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
    }*/
    
    @Override
	public void start() {
		System.out.println("Starting server");
		vertx.createHttpServer().requestHandler(req -> {
        	System.out.println("Starting server");
              req.response()
                .putHeader("content-type", "text/plain")
                .end("Hello from Vert.x!");
            }).listen(Constants.DEFAULT_PORT);
        System.out.println("HTTP server started on port 8080");
	}
}
