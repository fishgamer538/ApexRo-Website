import React from 'react';

const ExecutorGuideSection: React.FC = () => {
  return (
    <section id="executors" className="py-20 px-4 bg-black text-gray-100">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400 drop-shadow-[0_0_3px_rgba(0,255,255,0.5)]">Executor Download & Safety Guide</h2>
        <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
          This guide provides steps on how to safely acquire and use Roblox executors. Please read all disclaimers carefully.
        </p>

        {/* CRUCIAL DISCLAIMER */}
        <div className="bg-red-950 border border-red-700 text-red-300 p-6 rounded-lg mb-10 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-red-800 opacity-10 blur-sm pointer-events-none"></div>
          <p className="font-extrabold text-2xl mb-4 text-red-200 relative z-10">WARNING: Proceed with Extreme Caution</p>
          <ul className="list-disc list-inside space-y-3 text-lg relative z-10">
            <li><strong>Account Bans:</strong> Using executors violates Roblox's Terms of Service and can result in permanent account bans.</li>
            <li><strong>Malware Risk:</strong> Many "free" or unofficial executors are laced with viruses, spyware, or ransomware. Always verify sources.</li>
            <li><strong>Device Security:</strong> Disabling antivirus or running unknown executables can compromise your computer's security.</li>
            <li><strong>User Responsibility:</strong> ApexRo provides this guide for informational purposes only. You are solely responsible for your actions and any consequences that may arise.</li>
          </ul>
        </div>

        <div className="bg-gray-900 rounded-lg shadow-xl p-8 mb-8 border border-gray-700">
          <h3 className="text-2xl font-semibold mb-6 text-cyan-300">What are Roblox Executors?</h3>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Roblox executors are applications that allow users to inject and run custom scripts within the Roblox game client. These scripts can modify gameplay, automate actions, or provide advantages not available in standard play. They typically work by leveraging vulnerabilities in the Roblox application to bypass its security measures.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-6 text-cyan-300">Step-by-Step Guide</h3>

          <ol className="list-decimal list-inside space-y-6 text-lg">
            <li>
              <p className="font-semibold text-cyan-200 mb-2">1. Prepare Your System (Temporary Antivirus Disable):</p>
              <div className="bg-yellow-900 border border-yellow-700 text-yellow-300 p-4 rounded-md mb-4">
                <p className="font-bold">IMPORTANT SECURITY NOTE:</p>
                <p>Most executors are detected as malicious by antivirus software due to their nature of injecting into other processes. You will likely need to temporarily disable your antivirus or add an exception for the executor. This is a significant security risk.</p>
                <p className="mt-2"><strong>Steps:</strong></p>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Go to your operating system's security settings (e.g., Windows Security &gt; Virus &amp; threat protection).</li>
                  <li>Temporarily turn off "Real-time protection" or similar settings.</li>
                  <li>Remember to re-enable your antivirus immediately after installation/usage, or once you are absolutely sure the software is safe.</li>
                </ul>
              </div>
            </li>
            <li>
              <p className="font-semibold text-cyan-200 mb-2">2. Choose a Reputable Source:</p>
              <p className="text-gray-400 mb-2">
                This is the most critical step to avoid malware.
              </p>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>Look for well-known communities and forums with positive reputations regarding executors.</li>
                <li>Avoid random websites, YouTube videos with suspicious links, or untrustworthy download mirrors.</li>
                <li>Check for recent community reviews and active development.</li>
              </ul>
            </li>
            {/* NEW SECTION: Recommended Executors */}
            <li>
              <p className="font-semibold text-cyan-200 mb-2">3. Recommended Executors:</p>
              <p className="text-gray-400 mb-4">
                While ApexRo recommends choosing sources carefully, here are some executors that have historically maintained a good reputation within the community. Always perform your own due diligence and check for the latest reviews and safety status before downloading.
              </p>
              <ul className="list-disc list-inside ml-4 text-gray-400 space-y-2">
                <li><strong className="text-cyan-300">Delta:</strong> Often noted for its user-friendly interface and stability.</li>
                <li><strong className="text-cyan-300">KRNL:</strong> A popular free executor, generally considered reliable for basic to intermediate script execution.</li>
                <li><strong className="text-cyan-300">Wave:</strong> Another frequently updated executor, known for good performance.</li>
                <li><strong className="text-cyan-300">Radius:</strong> Often praised for its execution capabilities and active development.</li>
              </ul>
              <div className="bg-yellow-900 border border-yellow-700 text-yellow-300 p-4 rounded-md mt-4">
                <p className="font-bold">DISCLAIMER:</p>
                <p>The status and safety of executors can change rapidly. An executor that is safe today might be compromised tomorrow. Always check for the latest information from trusted communities.</p>
              </div>
            </li>
            <li>
              <p className="font-semibold text-cyan-200 mb-2">4. Download the Executor:</p>
              <p className="text-gray-400 mb-2">
                Navigate to your chosen reputable source and download the latest version of the executor.
              </p>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>Download files often come in a <code>.zip</code> or <code>.rar</code> format.</li>
                <li>Ensure you download from the official link provided by the community.</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold text-cyan-200 mb-2">5. Extract the Files:</p>
              <p className="text-gray-400 mb-2">
                If the executor is in a compressed archive, you'll need to extract it.
              </p>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>Right-click the downloaded <code>.zip</code> or <code>.rar</code> file.</li>
                <li>Select "Extract All" (Windows) or use a program like WinRAR/7-Zip.</li>
                <li>Extract to a new, easily accessible folder (e.g., on your Desktop).</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold text-cyan-200 mb-2">6. Run the Executor:</p>
              <p className="text-gray-400 mb-2">
                Locate the executable file (usually <code>.exe</code>) within the extracted folder.
              </p>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>Double-click the <code>.exe</code> file to launch the executor.</li>
                <li>You may need to run it as an administrator by right-clicking and selecting "Run as administrator".</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold text-cyan-200 mb-2">7. Inject into Roblox:</p>
              <p className="text-gray-400 mb-2">
                Once the executor is running, launch Roblox and join a game.
              </p>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>In the executor's interface, look for an "Inject" or "Attach" button.</li>
                <li>Click it to connect the executor to the Roblox game client.</li>
                <li>A confirmation message or a change in the executor's status usually indicates successful injection.</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold text-cyan-200 mb-2">8. Execute Scripts:</p>
              <p className="text-gray-400 mb-2">
                After successful injection, you can load and run scripts.
              </p>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>Most executors have a text editor or a "Script Hub" where you can paste or select scripts.</li>
                <li>Paste your desired script into the editor and click "Execute" or "Run".</li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="bg-gray-900 rounded-lg shadow-xl p-8 mb-8 border border-gray-700">
          <h3 className="text-2xl font-semibold mb-6 text-cyan-300">Advanced Safety Tips:</h3>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-400">
            <li><strong>Virtual Machine (VM):</strong> For maximum security, consider running executors within a virtual machine. This isolates potential threats from your main operating system.</li>
            <li><strong>Strong Passwords:</strong> Always use unique, strong passwords for your Roblox account and enable 2FA if available.</li>
            <li><strong>Regular Scans:</strong> Even if temporarily disabled, perform regular, thorough antivirus scans on your system.</li>
            <li><strong>Stay Updated:</strong> Keep your operating system, browser, and all security software up-to-date.</li>
            <li><strong>Backup Data:</strong> Regularly back up important data to an external drive or cloud service.</li>
          </ul>
        </div>

        <div className="text-center mt-8 text-gray-600 text-sm">
          ApexRo aims to provide knowledge and tools responsibly. Using third-party software comes with inherent risks.
        </div>
      </div>
    </section>
  );
};

export default ExecutorGuideSection;