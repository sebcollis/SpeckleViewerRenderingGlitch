import { Viewer, DefaultViewerParams, SpeckleLoader } from "@speckle/viewer";
import { CameraController } from "@speckle/viewer";

async function main() {
    /** Get the HTML container */
    const container = document.getElementById("renderer");

    /** Create Viewer instance */
    const viewer = new Viewer(container, DefaultViewerParams);
    /** Initialise the viewer */
    await viewer.init();

    /** Add the stock camera controller extension */
    viewer.createExtension(CameraController);

    /** Create a loader for the speckle stream */
    const loader = new SpeckleLoader(
        viewer.getWorldTree(),
        "https://latest.speckle.dev/streams/92b620fb17/objects/801360a35cd00c13ac81522851a13341",
        ""
    );
    /** Load the speckle data */
    await viewer.loadObject(loader, 1, true);
}

/** Call our function, which we named 'main' */
main();