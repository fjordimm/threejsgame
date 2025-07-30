
import * as THREE from "three";
import type Form from "../forms/Form";

export default class FormManager
{
    private readonly renderingScene: THREE.Scene;
    private readonly forms: Set<Form>;

    public constructor(renderingScene: THREE.Scene)
    {
        this.renderingScene = renderingScene;
        this.forms = new Set<Form>();
    }

    public add(form: Form): void
    {
        this.forms.add(form);

        if (form.ren !== null)
        { this.renderingScene.add(form.ren); }
    }

    public delete(form: Form): void
    {
        this.forms.delete(form);

        if (form.ren !== null)
        { this.renderingScene.remove(form.ren); }
    }

    public has(form: Form): boolean
    {
        return this.forms.has(form);
    }

    public values(): SetIterator<Form>
    {
        return this.forms.values();
    }
}
