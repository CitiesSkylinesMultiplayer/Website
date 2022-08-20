import React from 'react';

const GettingStarted = () => {
  return (
    <>
      <h2 id="getting-started">Getting Started</h2>
      <ol>
        <li>
          Depending on where your purchased Cities: Skylines, there are a few
          different ways of acquiring the multiplayer mod:
          <ul>
            <li>
              <strong>Steam Workshop:</strong> Click on{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://steamcommunity.com/sharedfiles/filedetails/?id=1558438291"
              >
                this link
              </a>{' '}
              to visit the steam workshop page, click 'subscribe' to install the
              mod.
            </li>
            <li>
              <strong>Manual Download: </strong> You can also manually download
              releases using GitHub{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/CitiesSkylinesMultiplayer/CSM/releases"
              >
                here
              </a>
              . Find the version that you want (both the client and host must
              use the same version), and then download the .zip file under
              'assets'.
            </li>
            <li>
              <strong>Custom Download: </strong> You can also download
              unreleased versions of the mod as soon as any code changes are
              made. Navigate to the list of CI builds{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/CitiesSkylinesMultiplayer/CSM/actions?query=workflow%3ACI+is%3Asuccess+branch%3Amaster"
              >
                here
              </a>
              , and click on the latest build (remember, both the client and
              host must use the same version). Under the artifacts heading,
              click on the 'CSM [Version]' link to download.
            </li>
            <li>
              <strong>From Source: </strong> You can also build the mod from
              source, see the resources{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/CitiesSkylinesMultiplayer/CSM/wiki/Developer-Resources"
              >
                here
              </a>{' '}
              for more information.
            </li>
          </ul>
        </li>

        <li>
          <strong>If you downloaded the mod</strong> you will need to install it
          (not needed when installing through the Steam Workshop). First extract
          the downloaded .zip archive. There are two methods to install the mod:
          <ul>
            <li>
              <strong>Installer: </strong>If running on windows, right click the
              'install.ps1' file and click 'Run with PowerShell'. If running on
              macOS or Linux, you will need{' '}
              <a
                href="https://github.com/PowerShell/PowerShell"
                rel="noopener noreferrer"
                target="_blank"
              >
                PowerShell Core
              </a>{' '}
              installed. Run <code>pwsh install.ps1</code>.
            </li>
            <li>
              <strong>Manually: </strong> Create a new folder called 'CSM'
              inside the Cities: Skylines <code>Mods</code> folder:
              <ul>
                <li>
                  <strong>Windows: </strong>
                  <code>
                    %LOCALAPPDATA%\Colossal Order\Cities_Skylines\Addons\Mods\
                  </code>
                </li>
                <li>
                  <strong>macOS: </strong>
                  <code>
                    ~/Library/Application Support/Colossal
                    Order/Cities_Skylines/Addons/Mods
                  </code>
                </li>
                <li>
                  <strong>Linux: </strong>
                  <code>
                    ~/.local/share/Colossal Order/Cities_Skylines/Addons/Mods
                  </code>
                </li>
              </ul>
              <li>
                Copy all of the .dll files from the downloaded archive to the
                new folder you just created (everything apart from{' '}
                <code>install.ps1</code>).
              </li>
            </li>
          </ul>
        </li>
        <li>
          <strong>If you downloaded the mod</strong> you also need to install
          CitiesHarmony (Not needed when installing through the Steam Workshop).
          Go to{' '}
          <a
            href="https://github.com/boformer/CitiesHarmony/releases"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://github.com/boformer/CitiesHarmony/releases
          </a>{' '}
          and download the latest <code>CitiesHarmony.zip</code>. Unzip the
          contained folder into the <code>Mods</code> folder mentioned above so
          that it now contains a <code>CitiesHarmony</code> folder in addition
          to the <code>CSM</code> folder.
        </li>
        <li>
          <strong>IMPORTANT: </strong> After launching Cities: Skylines, you
          must first enable the mod within 'Content Manager' or it will not
          appear!
        </li>
        <li>The mod is now installed and enabled, have fun!</li>
      </ol>
    </>
  );
};

export default GettingStarted;
