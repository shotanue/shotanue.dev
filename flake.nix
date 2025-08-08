{
  description = "shotanue.dev development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            # Node.js and package managers
            nodejs_22
            pnpm
            
            # Bun for main branch
            bun
            
            # Development tools
            git
            mise
          ];

          shellHook = ''
            echo "shotanue.dev development environment"
            echo "Node.js version: $(node --version)"
            echo "pnpm version: $(pnpm --version)"
            echo "Bun version: $(bun --version)"
            echo ""
            echo "Main branch: use bun commands"
            echo "Monorepo branch: use pnpm commands"
          '';
        };
      });
}