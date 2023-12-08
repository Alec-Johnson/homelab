# Goals

A deeper understanding of networking, virtual machines, clustering and how they interconnect. I also am enjoying the process with hands-on experience with server installations, as well as studying to obtain my CCNA/Finish up my CompTIA Network+ certifications alongside labs. Using the Cisco CLI on my switch and router soon enough. As well as updating my progress and learning thus far. After playing around with Microsoft Azure and other similar resources in the cloud in various situations, I know t

## Networking

## Pi-Hole (VPN)

I plan on installing a VPN on my L3 device and setting up an OpenVPN installation for now to get remote access to the environment. If not, I have another device I can remote to, which can view everything on my network, including the server dashboard as it is on the same LAN/Subnet. Access to my resources from anywhere securely is the goal.

### Layer 3

The router I have now is a NightHawk AX-750, which connects to my gateway through a modem, with another in AP mode, which has issues of course, but I have been running into some issues with it affecting the household connection so I am planning on a complete overhaul and designing it so others outside the LAN securely connect to WAN as well as the connections within LAN itself. This is where VLAN tags come in to segment my network.

### Cisco 2960s-24-TD-L

The Cisco Catalyst 2960s is a managed switch that provides ease of use through the CLI or web GUI when given an IP. It includes 24 Gigabit Ethernet ports, with options for PoE+ support, and two SFP uplink interfaces with two SFP+ transceivers. One of those transceivers takes in the WAN connection. It is nice being able to access/configure from anywhere on the web or, but a plan right now is to finish the configuration Cisco of my switch VLANs as well as the proper switching between my Layer 2 devices.

### Learning

I plan on configuring the switch with effective internet still in tact and digging deeper into the Cisco CLI. Separation or grouping of network operations going on within the LAN or incoming connections as well with the use of VLAN if I need to route from a L3 device, which luckily the router I have supports VLAN tagging(routing) coming from the Layer 2 switch. My overall goal for now is to set up an internal DMZ

## Lab Specs

Intel R1208GL4DS 1u Server
S2600GL Motherboard
2 x E5-2670 v2 Ivy Bridge
128GB DDR3-1333 ECC (6 x 16GB, 4 x 8GB)
2 x 480GB Samsung PM883 SSD
4 x 900GB Seagate SAS 10k 2.5" HDD
LSI 2308 (RMS25JB080) HBA flashed to IT mode
RMM Lite remote management (allows remote media, power control, KVM.)
2 x 10GBase-SR 2x SFP+ NIC

## Virtualization Setup/Diagrams

### TODO

Install 1Gbps firewall w/ 4 ports with opnsense
Don't create any rules that allow traffic from your dmz zones to your iot and internal lan zones. This ensures that even if a box gets compromised in your dmz, it cannot access your internal LAN networks. Enable logging for your deny policies. You will have visibility if something in your network tries accessing anything which it shouldn't.

Disable management traffic/login on all interfaces except your internal lan network. This way you can only login to the firewall from your internal network.

Disable vpn if you don't intend to login to your firewall remotely/access your internal resources remotely. This automatically makes your firewall invulnerable to any vpn related vulnerability that could come up in the future.

Create policies for your publically accessible dmz applications/servers as specific as possible ( open only the specific ports that you need, use custom ports whenever possible). If your firewall supports geo IP objects and you only intend to access from US based IPs, block access from all other countries.

If your firewall can handle the load, enable IPS and setup a logging server that collects logs from your firewall ( and other devices such as switches, APs etc). Monitor the logs on a weekly basis at the very least and identify traffic that is malicious/ trying to run exploits or scans. Manually block these IPs on your firewall or an upstream/isp router.

Ensure that your publically accessible servers are up to date and not vulnerable to any major exploits. Also ensure that these servers have automatic protection against brute force attacks ( automatically ban IPs if it detects multiple login failures within a short time period etc)

Regularly back up all devices, upgrade to newer stable versions which fix any known vulnerabilities. Use custom and complicated passwords and change them once in 6 months. Use extra long random passwords for things that can be directly accessed from the outside world ( your wifi, dmz servers etc)

Try to use an internal DNS server and log all dns queries. This will give you even more visibility into your network. Use separate DNS servers for your internal vlans and DMZ vlans.

Setup deny policies from your DMZ zones to your internal network zones and keep them right on top of all other policies. This way even if you accidentally allow traffic that you shouldn't , traffic will match your higher placed deny policies and will not work

I am planning on a going with a bare metal install of a free VMWare ESXI bare metal hypervisor as, which comes with a trial as a part of a part of VSpehere to manager clusters, free for 60 days, or opt in to the free plan less to mess with (for now) and see how it goes.

![vDiagram][vDiagram]
![git remote add origin `<http:C\Alec-Johnson\homelabs://\Alec-Johnson\homelab,`]

[vDiagram]: https://docs.vmware.com/en/VMware-vSphere/images/GUID-5EB66614-1EE8-4F39-8C8B-1E97EEE76791-high.png
