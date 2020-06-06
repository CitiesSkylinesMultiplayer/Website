import React from 'react';
import Image from 'react-bootstrap/Image';

const Usage = () => {
  return (
    <>
      <h2 id="usage">Usage</h2>
      <h3 id="usage-general">General</h3>
      <p>
        The Cities: Skylines Multiplayer mod enable multiplayer via a
        client-server approach. This means one player will act as the host (or
        server), and other players will connect to them. Decided which player
        will be the host (the host will have a little more work to do in order
        to play, and will have the multiplayer save on their computer).
      </p>

      <h3 id="usage-host">Host</h3>
      <p>
        <strong>Please Note: </strong> You may need to port forward your router
        depending on which connection method you use. More information about
        this is mentioned below.
      </p>
      <ol>
        <li>Ensure that the mod is installed and enabled.</li>
        <li>
          Either create a new map, or open an existing save. It's highly
          recommend that you{' '}
          <strong>backup any saves before you play on multiplayer!</strong>
          <br />
          Saves are located in the following locations:
          <ul>
            <li>
              <strong>Windows: </strong>
              <code>%LOCALAPPDATA%\Colossal Order\Cities_Skylines\Saves\</code>
            </li>
            <li>
              <strong>macOS: </strong>
              <code>
                ~/Library/Application Support/Colossal
                Order/Cities_Skylines/Saves
              </code>
            </li>
            <li>
              <strong>Linux: </strong>
              <code>~/.local/share/Colossal Order/Cities_Skylines/Saves</code>
            </li>
          </ul>
        </li>
        <li>
          Click on the 'Multiplayer' button on the top left of your screen to
          open the multiplayer menu.
        </li>
        <li>Update any of the fields to your liking, click 'Create Server'.</li>
        <li>You should see a message saying that the server has started.</li>
      </ol>

      <h4 id="port-forwarding">Port Forwarding Strategies</h4>
      <p>
        This mod requires the host (or server) to expose the port '4230' (or
        whatever port was entered) to the internet.
      </p>
      <p>
        <strong>
          Note: Only the host needs to port forward! If you are only playing
          locally (see below), you do not need to port forward!
        </strong>
      </p>

      <h5 id="port-forwarding-router">Port forwarding your router</h5>
      <p>
        You will need to port forward either port '4230' or whatever port you
        set when hosting the game. There are many tutorials online that explain
        this such as{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.noip.com/support/knowledgebase/general-port-forwarding-guide/"
        >
          this
        </a>
        .
      </p>

      <h5 id="port-forwarding-tunneling">Using a tunneling service</h5>
      <p>
        If you can't port forward your router (don't have access to the router,
        Internet Service Provider (ISP) restrictions etc.) you can use a
        tunneling service such as{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.vpn.net/"
        >
          Hamachi
        </a>
        .
      </p>

      <p>
        An amazing tutorial on how to use Hamachi with Cities: Skylines
        Multiplayer by Selim Hjorthall:
      </p>

      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title="Hamachi tutorial by Selim Hjorthall on YouTube"
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/aYFzwULLrb0"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <br />

      <h4 id="which-ip">Which IP address do players use?</h4>
      <p>
        The IP address used for connecting will depend on which port forwarding
        strategy you used above and how/where your planning on playing the game.
      </p>
      <p>
        <strong>Note: </strong>For your convenience, the mod will display both
        your local network IP address and external network IP address within the
        server hosting menu.
      </p>
      <p>
        If you and your friends are on the same network (think LAN party, or
        same household) follow these steps:
      </p>
      <ol>
        <li>
          Open the command prompt (on Windows 10 you click the start button and
          type in 'cmd' and hit enter).
        </li>
        <li>
          Type in <code>ipconfig</code>.
        </li>
        <li>
          You should see something similar the the image below (note: you may
          see multiple adapters, usually the adapter with a valid 'Default
          Gateway' is the one you want to look at), the IPv4 address highlighted
          is the address that players on your local network should use to
          connect to the server.
          <br />
          <Image
            className="mt-2"
            alt="ipconfig command with 'IPv4 Address highlighted'"
            src="/assets/ipconfig.png"
            fluid
            rounded
          />
        </li>
      </ol>
      <p>
        If you and your friends are playing over the internet, you have two
        choices: If you port forwarded your router, simple google 'What's my IP
        address' and send that address to any players. If you used a tunneling
        service like{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.vpn.net/"
        >
          Hamachi
        </a>
        , you will need to use the IP address that is provided there.
      </p>
      <h3 id="usage-players">Players</h3>
      <ol>
        <li>Ensure that the mod is installed and enabled.</li>
        <li>Click the 'Join Game' button on the main menu.</li>
        <li>Enter the host (server) information, alongside your name.</li>
        <li>
          Click 'Connect to Server' and wait up to 60 seconds (it should usually
          take less than 5 seconds to connect).
        </li>
      </ol>
    </>
  );
};

export default Usage;
